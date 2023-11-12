---
genre: "開発"
subgenre: "Kubernetes"
title: "Knative実践ガイド / 小野 佑大"
thumbnail: "http://books.google.com/books/content?id=I7C3EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
publishedDate: "2023-04-11"
stars: 5
difficulty: 3
slug: "knative-jissen-guide"
updatedDate: "2023-11-12"
---

## 商品紹介(Google Books APIsより)

> Knativeは「イベント駆動型アーキテクチャ」のフレームワークとして、サーバーレスなシステム構築に活用できます。とくに、マイクロサービスを利用したステートレスなアプリケーションを実装する上で、Knativeのイベント駆動型アーキテクチャのセットは非常に有用で、今後のクラウドネイティブな環境において、スケーラビリティの高いアプリケーションを簡単に実装するのに役立ちます。
> 本書では、クラウドネイティブに取り組むインフラ技術者が、最新トレンドであるKnativeの知見を体系的に学習できるように、技術解説に加えて、実務で参考になるユースケースを取り上げています。今後のKubernetes環境における必須の技術についての理解度を、本書でもう一歩前に進めることができます。IT現場でKnativeの採用を検討するうえでも、また、Knativeを使いこなすうえでも、必携のガイドブックの登場です。
> 発行：インプレス


## 書評

日本語でKnativeについてある程度網羅的に解説した本は、多分これだけだと思う。

「Knativeの本質はFaaSではなく、Kubernetesを抽象化することで利用難易度を下げることだ」という前書き（と僕は解釈した）にある通り、メインの解説はKnative FunctionsではなくServingとEventingであることには注意する必要がある。
逆に言えばFunctionsについてはKnative Functionsに特化した本や記事（これについてはいくつかある）で学習した方が良い。

ServingとEventingについては、サンプルアプリケーションをハンズオンでいじっていくことによって学習して行く形式で解説が進んでいく。マニフェストの書き方の解説はほぼないので、マニフェストのサンプル集みたいな使い方はできないし、Kubernetesの知識がない場合には進めるのは結構しんどいと思う。
それさえ問題なければ、網羅的かつ実践的な内容が丁寧に解説されている唯一の本であることは間違いないため、強く勧めたい。Knativeの入門用と、簡素な公式ドキュメントの行間を埋める役割の両面が期待できる。
