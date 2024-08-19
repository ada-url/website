---
title: Rust
description: How to install and use Ada in a Rust project
---

Ada has a Rust client available on [Github][source-code] and
also on [crates.io][crate].

## Installation

Add the following as a dependency to your project (`Cargo.toml`):

```toml
[dependencies]
ada-url = "1"
```

## Usage

Here is an example illustrating a common usage:

```rust
use ada_url::Url;
fn main() {
  let mut u = Url::parse("http://www.google:8080/love#drug", None)
    .expect("bad url");
  println!("port: {:?}", u.port());
  println!("hash: {:?}", u.hash());
  println!("pathname: {:?}", u.pathname());
  println!("href: {:?}", u.href());
  u.set_port("9999");
  println!("href: {:?}", u.href());
}
```

## Resources

- [Source code][source-code]
- [Crate - crates.io][crate]
- [Documentation - docs.rs][documentation]


[crate]: https://crates.io/crates/ada-url
[documentation]: https://docs.rs/ada-url/1.0.2/ada_url/
[source-code]: https://github.com/ada-url/rust