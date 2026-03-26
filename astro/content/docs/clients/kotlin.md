---
title: Kotlin
description: How to install and use Ada in a Kotlin/Native project
---

Ada has a Kotlin/Native client available on [GitHub][source-code] and
on [Maven Central][maven-central].

## Installation

### Gradle (Kotlin DSL)

Add the dependency to your `build.gradle.kts`:

```kotlin
repositories {
    mavenCentral()
}

dependencies {
    implementation("com.ada-url:ada:0.1.3")
}
```

For a Kotlin Multiplatform project, add it inside the appropriate source set:

```kotlin
kotlin {
    sourceSets {
        nativeMain {
            dependencies {
                implementation("com.ada-url:ada:0.1.3")
            }
        }
    }
}
```

### Maven

```xml
<dependency>
    <groupId>com.ada-url</groupId>
    <artifactId>ada</artifactId>
    <version>0.1.3</version>
</dependency>
```

## Usage

### Parsing a URL

```kotlin
Url.parse("https://example.com/path?query#hash")?.use { url ->
    println(url.href)      // https://example.com/path?query#hash
    println(url.protocol)  // https:
    println(url.host)      // example.com
    println(url.pathname)  // /path
    println(url.search)    // ?query
    println(url.hash)      // #hash
}
```

`Url` implements `AutoCloseable` — always call `close()` or use the `use {}` block
to free the underlying native memory.

### Relative URL Resolution

```kotlin
Url.parse("/new-path", base = "https://example.com/old")?.use { url ->
    println(url.href) // https://example.com/new-path
}
```

### Validation

```kotlin
Url.canParse("https://example.com") // true
Url.canParse("not a url")           // false
```

### Mutating a URL

All setters return `true` on success. Pass `null` to `setPort`, `setHash`,
or `setSearch` to clear the component.

```kotlin
Url.parse("https://example.com")?.use { url ->
    url.setPathname("/new-path")
    url.setSearch("key=value")
    url.setPort("8080")
    println(url.href) // https://example.com:8080/new-path?key=value
}
```

### Unicode and IDNA

Internationalized domain names are handled automatically during parsing and also
exposed via `Idna`:

```kotlin
Idna.toAscii("meßagefactory.ca")          // xn--meagefactory-m9a.ca
Idna.toUnicode("xn--meagefactory-m9a.ca") // meßagefactory.ca
```

### URL Search Params

```kotlin
UrlSearchParams.parse("key=value&foo=bar").use { params ->
    println(params.get("key"))  // value
    println(params.size)        // 2

    params.append("key", "second")
    params.sort()
    println(params.toString())  // foo=bar&key=value&key=second

    params.keys().use { keys ->
        while (keys.hasNext()) println(keys.next())
    }
}
```

### Version

```kotlin
println(adaVersion())            // e.g. "3.4.0"
println(adaVersionComponents())  // AdaVersion(major=3, minor=4, revision=0)
```

## Memory Management

`Url`, `UrlSearchParams`, `UrlSearchParamsList`, and all iterator types wrap
native memory and must be freed explicitly. The idiomatic pattern is `use {}`:

```kotlin
Url.parse("https://example.com")?.use { url ->
    // url is freed automatically at the end of this block
}
```

For long-lived objects, call `close()` manually:

```kotlin
val url = Url.parse("https://example.com") ?: error("invalid URL")
try {
    println(url.href)
} finally {
    url.close()
}
```

## API Reference

### `Url`

| Member | Description |
|---|---|
| `Url.parse(input, base?)` | Parses a URL string, optionally relative to a base. Returns `null` on failure. |
| `Url.canParse(input, base?)` | Returns `true` if the input is a valid URL. |
| `href` | The serialized URL. |
| `protocol` | The scheme including the trailing colon (e.g. `"https:"`). |
| `host` | Host and port (e.g. `"example.com:8080"`). |
| `hostname` | Host without port (e.g. `"example.com"`). |
| `port` | Port as a string, or `""` when absent. |
| `pathname` | The path (e.g. `"/foo/bar"`). |
| `search` | The query string including `?`, or `""` when absent. |
| `hash` | The fragment including `#`, or `""` when absent. |
| `username` | The username component. |
| `password` | The password component. |
| `origin` | The serialized origin (e.g. `"https://example.com"`). |
| `hostType` | `HostType.Domain`, `HostType.IPv4`, or `HostType.IPv6`. |
| `schemeType` | `SchemeType.Https`, `SchemeType.Http`, `SchemeType.File`, etc. |
| `components` | Raw byte-offset positions of each URL component as `UrlComponents`. |
| `setHref(input)` | Replaces the entire URL. |
| `setProtocol(input)` | Sets the scheme. |
| `setHost(input)` | Sets the host and optional port. |
| `setHostname(input)` | Sets the host without changing the port. |
| `setPort(input?)` | Sets the port, or clears it when `null`. |
| `setPathname(input)` | Sets the path. |
| `setSearch(input?)` | Sets the query string, or clears it when `null`. |
| `setHash(input?)` | Sets the fragment, or clears it when `null`. |
| `setUsername(input)` | Sets the username. |
| `setPassword(input)` | Sets the password. |
| `hasCredentials()` | `true` when username or password is non-empty. |
| `hasPort()` | `true` when an explicit port is present. |
| `hasSearch()` | `true` when a query string is present. |
| `hasHash()` | `true` when a fragment is present. |
| `hasHostname()` | `true` when a hostname is present. |
| `hasEmptyHostname()` | `true` when the hostname is explicitly empty. |
| `hasNonEmptyUsername()` | `true` when the username is non-empty. |
| `hasNonEmptyPassword()` | `true` when the password is non-empty. |
| `hasPassword()` | `true` when a password component is present. |
| `copy()` | Returns an independent deep copy. |
| `toString()` | Equivalent to `href`. |

### `UrlSearchParams`

| Member | Description |
|---|---|
| `UrlSearchParams.parse(input)` | Parses a query string (with or without a leading `?`). |
| `size` | Number of key/value pairs. |
| `isEmpty` | `true` when there are no entries. |
| `append(key, value)` | Adds a pair without removing existing pairs with the same key. |
| `set(key, value)` | Sets the value for a key, removing any prior pairs with that key. |
| `get(key)` | Returns the first value for the key, or `null` if not found. |
| `getAll(key)` | Returns a `UrlSearchParamsList` of all values for the key. |
| `has(key)` | `true` if any pair with the given key exists. |
| `has(key, value)` | `true` if a pair with both the given key and value exists. |
| `remove(key)` | Removes all pairs with the given key. |
| `remove(key, value)` | Removes all pairs with both the given key and value. |
| `reset(input)` | Replaces all entries by re-parsing the input string. |
| `sort()` | Sorts pairs by key in Unicode code-point order (stable). |
| `keys()` | Returns a `UrlSearchParamsKeyIterator`. |
| `values()` | Returns a `UrlSearchParamsValueIterator`. |
| `entries()` | Returns a `UrlSearchParamsEntryIterator` of `Pair<String, String>`. |
| `toString()` | Serializes to `application/x-www-form-urlencoded` form. |

`UrlSearchParamsList` and all iterator types implement `AutoCloseable` — close them when done.

### `Idna`

| Member | Description |
|---|---|
| `Idna.toAscii(input)` | Converts a Unicode domain to its Punycode ACE form. |
| `Idna.toUnicode(input)` | Converts a Punycode ACE domain to its Unicode form. |

## Resources

- [Source code][source-code]
- [Maven Central][maven-central]

[source-code]: https://github.com/ada-url/kotlin
[maven-central]: https://central.sonatype.com/artifact/com.ada-url/ada
