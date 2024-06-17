# Bible API

Welcome to Bible API, your go-to resource for easy access to Bible verses and chapters across multiple versions and languages. With a simple request, obtain the text of a specific verse or an entire chapter, perfect for developers, researchers, and Bible enthusiasts who want to incorporate the Holy Scripture into their applications, websites, or projects.

## Overview

- [Key Features](#key-features)
- [Quick Start](#quick-start)
- [API Endpoints](#api-endpoints)
  - [Get a Verse](#get-a-verse)
  - [Get a Chapter](#get-a-chapter)
- [Supported Versions](#supported-versions)
- [Examples](#examples)
- [Potential Applications](#potential-applications)
- [FAQs](#faqs)
- [Contribute](#contribute)
- [Licensing](#licensing)

## Quick Start

To begin using Bible API, no API keys or authentication are required. Simply send a request to the desired endpoint with the necessary parameters, and receive the data in JSON format.

## API Endpoints

### Get a Verse

To obtain a specific verse, send a request to the following endpoint:

```
https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${version}/books/${book}/chapters/${chapter}/verses/${verse}.json
```

Replace `${version}`, `${book}`, `${chapter}`, and `${verse}` with the appropriate values.

**Parameters:**

- `version`: The Bible version (e.g., `en-asv`, `en-kjv`)
- `book`: The book of the Bible (e.g., `genesis`, `exodus`)
- `chapter`: The chapter number
- `verse`: The verse number

### Get a Chapter

To access an entire chapter, send a request to the following endpoint:

```
https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${version}/books/${book}/chapters/${chapter}.json
```

Replace `${version}`, `${book}`, and `${chapter}` with the appropriate values.

**Parameters:**

- `version`: The Bible version (e.g., `en-asv`, `en-kjv`)
- `book`: The book of the Bible (e.g., `genesis`, `exodus`)
- `chapter`: The chapter number

## Key Features

- **Blazing Fast and Reliable**: Experience lightning-fast response times and exceptional reliability, ensuring a seamless and efficient integration with your applications and projects.
- **Completely Free**: The Bible API is entirely free to use, making it accessible to everyone, regardless of budget constraints or project size.
- **Access to Multiple Bible Versions**: The Bible API currently supports numerous Bible versions and is continuously expanding to include more translations, ensuring you have access to a diverse range of Scripture texts.
- **Support for 300+ Languages**: Our goal is to cover over 300 languages and translations, making the Bible API one of the most comprehensive and inclusive resources for accessing the Holy Scripture in various languages.
- **Regularly Updated and Maintained**: Our dedicated team regularly updates and maintains the Bible API, ensuring its accuracy, reliability, and continued improvement.
- **Public Domain Versions**: Access public domain Bible versions without any copyright restrictions, allowing for a wide range of uses and applications.
- **Simple and Easy-to-use API**: The Bible API's straightforward design and extensive documentation make it easy for developers of all skill levels to integrate it into their projects.
- **Extensive Documentation**: Comprehensive documentation provides clear instructions, examples, and guidelines to help you make the most of the Bible API and its features.

## Supported Versions

Use the following endpoint to view a list of all available Bible versions:

```
https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/bibles.json
```

The response will display an array of Bible versions with their associated metadata, including the version ID, name, description, language, and more.

## Examples

In this section, you'll find examples demonstrating the use of Bible API, along with code snippets showcasing its implementation in various programming languages.

**API Request Examples:**

- Retrieve Genesis 1:1 in the American Standard Version (ASV):

  ```
  https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/genesis/chapters/1/verses/1.json
  ```

- Fetch John 3:16 in the King James Version (KJV):

  ```
  https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-kjv/books/john/chapters/3/verses/16.json
  ```

- Access the complete chapter of Psalm 23 in the American Standard Version (ASV):

  ```
  https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/psalms/chapters/23.json
  ```

**Code Snippets:**

### JavaScript

```javascript
fetch(
  "https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/genesis/chapters/1/verses/1.json"
)
  .then((response) => response.json())
  .then((data) => console.log(data.text));
```

### Python

```python
import requests

response = requests.get("https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/genesis/chapters/1/verses/1.json")
data = response.json()
print(data["text"])
```

### PHP

```php
$response = file_get_contents("https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/genesis/chapters/1/verses/1.json");
$data = json_decode($response, true);
echo $data["text"];
```

## FAQs

**Q: Is an API key or authentication needed to use Bible API?**

A: No, Bible API does not require API keys or authentication. Simply send a request to the desired endpoint with the necessary parameters to receive the data in JSON format.

**Q: How often are new Bible versions added to the API?**

A: We continuously strive to add new Bible versions to the API. If you have a specific version you'd like to see included, please open an issue or contact a maintainer.

**Q: Can I use Bible API for commercial purposes?**

A: Yes, Bible API can be used for commercial purposes. However, be aware of copyright restrictions on some Bible versions. Consult the metadata of each version for information on their respective licenses.

## Upcoming Features

We are continuously working on improving and expanding the Bible API to provide you with the best possible experience. Here's a sneak peek at some of the exciting features we have planned for future releases:

| Feature                                      | Description                                                                                  |
| -------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Additional Bible Translations**            | Add support for 300+ languages                                                               |
| **Natural Language Processing (NLP) Search** | Perform advanced searches using natural language queries                                     |
| **Audio Bible Integration**                  | Access Bible verses with high-quality audio recordings                                       |
| **Study Notes and Commentary**               | Access study notes and commentary from renowned Bible scholars                               |
| **Bible Reading Plans**                      | Access a variety of Bible reading plans to help users read through the Bible consistently    |
| **Bible Quiz and Trivia**                    | Test your Bible knowledge with fun quizzes and trivia questions                              |
| **Verses of the Day**                        | Access a daily curated verse through a dedicated endpoint                                    |
| **Mobile SDKs for iOS and Android**          | Easily integrate the Bible API into mobile apps with our official SDKs                       |
| **AI-Generated Bible Summaries**             | Receive concise, AI-generated summaries of Bible chapters and stories                        |
| **Sentiment Analysis**                       | Analyze the sentiment of Bible verses and passages using AI algorithms                       |
| **AI-Powered Verse Clustering**              | Discover related verses and passages through AI-powered clustering and grouping              |
| **Personalized AI-Generated Bible Studies**  | Experience tailored Bible studies generated by AI based on preferences and interests         |
| **AI-Driven Scripture Insights**             | Unlock deeper insights into Bible verses using cutting-edge AI analysis techniques           |
| **AI-Generated Bible-Verse-to-Image**        | Receive beautiful, AI-generated images inspired by Bible verses                              |
| **Conversational AI for Bible Study**        | Interact with an AI-powered virtual assistant to guide you through your Bible study sessions |

## Contribute

We encourage contributions to enhance and expand Bible API. For suggestions, or feature requests, please open an issue on our GitHub repository. If you'd like to contribute, feel free to submit a pull request. A contributing guide is under development.

## Licensing

Bible API is available under the [MIT License](LICENSE). The text of the Bible versions provided by the API may have additional copyright restrictions. Consult the metadata of each version for information on their respective licenses.

---

Crafted with 💙 by the Bible API Team. Enjoy!
