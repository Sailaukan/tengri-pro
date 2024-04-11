# Tengri Pro

## Introduction
Tengri Pro is an interactive web platform dedicated to delivering news articles on a variety of topics, including education, auto, news, life, and travel. Developed with React and Firebase, Tengri Pro offers users an immersive news-reading experience with features such as article search, user comments, and Telegram sharing.

## Technologies
- **Frontend**: React.js
- **Backend**: Firebase Authentication, Firestore
- **Other**: Telegram API for sharing articles

## Features
- **Firebase Authentication**: Secure login system allowing users to interact with the content by leaving comments.
- **Firestore Database**: Real-time database for storing news articles and user comments, enabling dynamic content management.
- **Search Functionality**: Users can search for articles by title, making it easier to find relevant content.
- **Topic Categorization**: Articles are organized by topics for streamlined navigation.
- **Share on Telegram**: Direct article sharing to Telegram for wider audience reach.

## Setup and Installation
To set up Tengri Pro locally:
1. Clone the repository:
```
git clone https://example.com/TengriPro.git
```
2. Install dependencies:
```
cd TengriPro
npm install
```
3. Start the development server:
```
npm start
```

## Usage
After logging in using Firebase Authentication, users can browse through the various news topics, leave comments on articles, search for specific articles by title, and share articles on Telegram. All interactions are real-time thanks to Firestore's live database syncing.

## Contributing
We welcome contributions to Tengri Pro! If you have suggestions for improvements or bug fixes, please feel free to fork the repository and submit a pull request.

## Acknowledgments
- Special thanks to the React and Firebase communities for their invaluable resources.
- Inspired by the rich heritage and storytelling tradition of the Tengri.

## Note
This website uses Firebase's free tier, which imposes limitations on read/write requests to Firestore. Consequently, users may experience errors if these limits are exceeded. If you encounter this issue, please try accessing the website again after 1-2 hours. We aim to migrate to Supabase in the future for improved scalability but are currently constrained by time. Thank you for your understanding.
