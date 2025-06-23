# 🐶 Dog CEO API Data Viewer

A simple web app that fetches random dog images from the [Dog CEO API](https://dog.ceo/dog-api/) and displays them dynamically. Includes a filter to search by breed and a refresh button to load new images.

## 🚀 Live Demo

🔗 [View the Live Site](https://dog-api-viewer.vercel.app/)

## 📸 Features

- Fetches 10 random dog images from the API
- Filters dogs by breed name
- Refresh button to load new dog images
- Responsive grid layout
- Lightweight and fast using plain HTML, CSS, and JavaScript

## 📦 Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- Dog CEO API

## 🧠 How It Works

1. On page load, a call is made to:
   https://dog.ceo/api/breeds/image/random/10

2. The breed is extracted from each image URL using JavaScript.

3. Users can:
   - Use the search input to filter by breed name.
   - Click "Fetch New Dogs" to load a new set of images.

## 📂 Project Structure

```
dog-api-viewer/
├── index.html
├── style.css
├── script.js
```

## 🔗 API Reference

GET https://dog.ceo/api/breeds/image/random/10

Returns:
{
  "message": [...],
  "status": "success"
}

## 📥 Installation

```bash
git clone https://github.com/adithya3010/dog-api-viewer.git
cd dog-api-viewer
open index.html
```

## 🧑‍💻 Author

- **Name:** Adithya Varma
- **GitHub:** [@adithya3010](https://github.com/adithya3010)

