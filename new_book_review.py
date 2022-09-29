import subprocess
import os
from urllib.parse import quote
import requests
import jaconv


class Book():
    def __init__(self):
        self.category: str
        self.title: str
        self.authors: str
        self.genre: str
        self.subgenre: str
        self.description: str
        self.thumbnail: str
        self.publishedDate: str

    def create_file(self):
        os.makedirs(
            f"src/contents/books/{self.genre}/{self.subgenre}", exist_ok=True)
        fp = f"src/contents/books/{self.genre}/{self.subgenre}/{self.title.replace('/','／')}／{self.authors}.md"
        with open(fp, "w") as f:
            f.write(f'''---
genre: "{self.genre}"
subgenre: "{self.subgenre}"
title: "{self.title}"
thumbnail: "{self.thumbnail}"
publishedDate: "{self.publishedDate}"
stars: 5
difficulty: 5
slug: ""
updatedDate: ""
---

## 商品紹介(Google Books APIsより)

{self.description}

## 書評

''')
        print(f"{fp}にテンプレートファイルを作成\nTyporaで開きますか？(Yn): ", end="")
        if not input().strip().lower() == "n":
            subprocess.run(["open", fp, "-a", "Typora"])


def main():
    print("検索: ", end="")
    q = input().strip()
    url = f"https://www.googleapis.com/books/v1/volumes?q={quote(q)}"
    data = requests.get(url).json()
    items: list[dict] = list(map(lambda x: x["volumeInfo"], data["items"]))
    book = Book()
    print("\tタイトル\t著者")
    for i in range(0, 10):
        item = items[i]
        if not "authors" in item:
            item["authors"] = []
        item["authors"] = ','.join(item['authors'])
        if not "description" in item:
            item["description"] = ""
        print(f"({i})\t{item['title']}\t{item['authors']}")
    print("選択してください: ", end="")
    selected = input().strip()
    item = items[int(selected)]
    book.title = jaconv.z2h(
        item["title"], kana=False, ascii=True, digit=True)
    book.authors = item["authors"]
    book.description = "  \n".join(
        list(map(lambda x: f"> {x}", item["description"].split(" "))))
    book.thumbnail = item["imageLinks"]["thumbnail"]
    book.publishedDate = item["publishedDate"]
    print("ジャンルを入力: ", end="")
    book.genre = input().strip()
    print("サブジャンルを入力: ", end="")
    book.subgenre = input().strip()
    book.create_file()


if __name__ == "__main__":
    main()
