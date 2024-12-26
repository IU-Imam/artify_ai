# ARTIFY AI

ARTIFY AI is an image generation tool that allows users to create images based on text prompts using the Hugging Face API. Users can input a text prompt, generate an image, preview it, and download the result.

## Features

- **Text-to-Image Generation:** Generate images by providing text prompts.
- **Image Preview:** View the generated image instantly.
- **Download Button:** Download the generated image with a click.
- **Loading Spinner:** Shows a spinner while the image is being generated.
- **Responsive Design:** Adapts the UI for different screen sizes.

## Requirements

- Node.js (v14 or higher)
- npm or yarn
- Vite for development

## Setup

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd <project_folder>
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

   Or, if you're using yarn:

   ```bash
   yarn install
   ```

3. Add your API key to the `.env` file:

   - Create a `.env` file in the root of your project.
   - Add your Hugging Face API key as follows:

     ```
     VITE_API_KEY=your_hugging_face_api_key_here
     ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   Or with yarn:

   ```bash
   yarn dev
   ```

5. Open your browser and go to `http://localhost:3000` to start using the image generation feature.

## Project Structure

```
├── src/
│   ├── assets/
│   │   └── img_def.png      # Placeholder image
│   ├── components/
│   │   └── ImageGen.jsx     # Image generation component
│   ├── App.jsx              # Main app file
│   └── main.js              # Entry point for the app
├── .env                     # Environment file to store your API key
├── package.json             # Project dependencies and scripts
├── vite.config.js           # Vite configuration file
└── README.md                # This file
```

## Technologies Used

- React
- Vite
- Tailwind CSS
- Hugging Face API

## Contributing

Feel free to fork this repository and submit pull requests. If you find any bugs or have feature requests, please open an issue.
