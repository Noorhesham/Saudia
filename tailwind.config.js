// tailwind.config.js
module.exports = {
    content: ["./*.html"], // Add paths to all of your template files
    theme: {
        extend: {
            maxWidth: {
                // Ensure Tailwind can use custom max-width utilities
                "1330px": "1330px",
            },
            colors: {
                main: "#78006e",
            },
        },
    },
    plugins: [],
}