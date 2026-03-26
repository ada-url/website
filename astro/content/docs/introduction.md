---
title: Introduction
description: WHATWG specification compliant URL parser
---

Ada is a fast and spec-compliant URL parser written in C++.

* It's widely tested by both Web Platform Tests and Google OSS Fuzzer.
* It is **extremely fast**.
* It's the default URL parser of Node.js since Node 18.16.0.
* It supports Unicode Technical Standard.
* It includes a [URLPattern](https://url.spec.whatwg.org/#urlpattern) implementation compatible with the web-platform tests.

The Ada library passes the full range of tests from the specification, across a wide range of platforms (e.g., Windows, Linux, macOS).

## Who uses Ada?

Ada is used by Node.js and many other well-known systems:

- **Node.js** — default URL parser since Node.js 18.16.0
- **Cloudflare Workers**
- **Redpanda**
- **Kong**
- **Telegram**
- **DataDog**

## FAQ

<details>
<summary>What is WHATWG?</summary>

The term WHATWG stands for **Web Hypertext Application Technology Working Group**.
      
It is a community-driven organization that focuses on developing and maintaining web standards.
The WHATWG was initially formed in response to the divergence between the World Wide Web Consortium (W3C) and the browser vendors at the time, who felt that the W3C process was too slow to address the evolving needs of web developers.
</details>
<details>
<summary>Who uses Ada? Is it battle-tested?</summary>

Ada is adopted by Node.js and used by millions of developers since Node.js 18.16.0. It is also used by Cloudflare Workers, Redpanda, Kong, Telegram, and DataDog.
</details>
<details>
<summary>Can I use this in my project?</summary>

Yes. Free to use for personal and commercial projects. Ada is available under MIT and Apache License 2.0.
</details>
<details>
<summary>What is URLPattern?</summary>

URLPattern is a web standard for matching URLs against patterns. Ada includes a full
[URLPattern](https://url.spec.whatwg.org/#urlpattern) implementation that is compatible
with the [web-platform tests](https://github.com/web-platform-tests/wpt/tree/master/urlpattern).
</details>

## License

This code is made available under the Apache License 2.0 as well as the MIT license. 

Our tests include third-party code and data. The benchmarking code includes third-party code: it is provided for research purposes only and not part of the library.
