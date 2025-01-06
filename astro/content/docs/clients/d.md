---
title: D
description: How to install and use Ada in a D project
---

Ada has a D client available on [Github][source-code] and
also on [dub.pm][dub-registry].

## Installation

Add the following as a dependency to your project (`dub.json` or `dub.sdl`):

```bash
# dub add ada-d from dub-registry
$ dub add ada-d
```

Modules hierarchy:

```bash
.
└── source
    ├── c
    │   ├── ada.d # low-level C bindings - @nogc, nothrow, @safe and betterC compatible
    │   └── wrapper.d # D (mangled) RAII - nothrow, @safe and betterC compatible
    └── package.d # by default set public wrapper.d in 'import ada_url'
                  # (for low-level C bindings use 'import c.ada')
```

## Usage

Here is an example illustrating a common usage:

```d
import ada_url : AdaUrl, ParseOptions; // @safe, nothrow and betterC compatible
import std.stdio : writeln; // need GC and throw exception

void main() @safe {
  auto u = AdaUrl(ParseOptions("http://www.google:8080/love#drug"));
  writeln("port: ", u.getPort);
  writeln("hash: ", u.getHash);
  writeln("pathname: ", u.getPathname);
  writeln("href: ", u.getHref());
  u.setPort("9999");
  writeln("href: ", u.getHref); // empty '()' is optional
}
```

## Resources

- [Source code][source-code]
- [Dub - dub.pm][dub-registry]
- [Documentation - dpldocs.info][documentation]


[dub-registry]: http://ada-d.dub.pm
[documentation]: https://ada-d.dpldocs.info
[source-code]: https://github.com/kassane/ada-d