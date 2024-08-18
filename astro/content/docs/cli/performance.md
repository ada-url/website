---
title: CLI Performance
description: How is the performance of Ada and adaparse CLI?
---

Our `adaparse` tool may outperform other popular alternatives. We offer a [collection of
sets of URLs](https://github.com/ada-url/url-various-datasets) for benchmarking purposes.
The following results are on a MacBook Air 2022 (M2 processor) using LLVM 14. We
compare against [trurl](https://github.com/curl/trurl) version 0.6 (libcurl/7.87.0).

### Benchmarks

<details>
<summary>
**wikipedia_100k dataset**, adaparse can parse URLs **three times faster than trurl**.
</summary>

```bash
  time cat url-various-datasets/wikipedia/wikipedia_100k.txt| trurl --url-file - &> /dev/null   1
  cat url-various-datasets/wikipedia/wikipedia_100k.txt  0,00s user 0,01s system 3% cpu 0,179 total
  trurl --url-file - &> /dev/null  0,14s user 0,03s system 98% cpu 0,180 total


  time cat url-various-datasets/wikipedia/wikipedia_100k.txt| ./build/tools/cli/adaparse -g href &> /dev/null
  cat url-various-datasets/wikipedia/wikipedia_100k.txt  0,00s user 0,00s system 10% cpu 0,056 total
  ./build/tools/cli/adaparse -g href &> /dev/null  0,05s user 0,00s system 93% cpu 0,055 total
```
</details>
<details>
<summary>
Using **top100 dataset**, adaparse is **twice as fast as the trurl**.
</summary>

```bash
  time cat url-various-datasets/top100/top100.txt| trurl --url-file - &> /dev/null              1
  cat url-various-datasets/top100/top100.txt  0,00s user 0,00s system 4% cpu 0,115 total
  trurl --url-file - &> /dev/null  0,09s user 0,02s system 97% cpu 0,113 total

  time cat url-various-datasets/top100/top100.txt| ./build/tools/cli/adaparse -g href &> /dev/null
  cat url-various-datasets/top100/top100.txt  0,00s user 0,01s system 11% cpu 0,062 total
  ./build/tools/cli/adaparse -g href &> /dev/null  0,05s user 0,00s system 94% cpu 0,061 total
```
</details>

### Results

The results will vary depending on your system. We invite you to run your own benchmarks.

#### Parsing 100,000 Wikipedia URLs

```bash
ada   ▏   55 ms ███████▋
trurl ▏  180 ms █████████████████████████
```

#### Parsing 100,000 URLs from TOP 100 websites

```bash
ada   ▏   61 ms █████████████▍
trurl ▏  113 ms █████████████████████████
```