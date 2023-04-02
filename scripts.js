function updateElement(id, value) {
    document.getElementById(id).textContent = value;
}

document.getElementById("header-h1").addEventListener("input", function (e) {
    updateElement("main-h1", e.target.value);
});

document.getElementById("header-button").addEventListener("input", function (e) {
    updateElement("main-header-button", e.target.value);
});

document.getElementById("intro-h2").addEventListener("input", function (e) {
    updateElement("main-h2", e.target.value);
});

document.getElementById("intro-paragraph").addEventListener("input", function (e) {
    updateElement("main-paragraph", e.target.value);
});

document.getElementById("intro-button").addEventListener("input", function (e) {
    updateElement("main-intro-button", e.target.value);
});

document.getElementById("feature-1-h3").addEventListener("input", function (e) {
    updateElement("h3-feature-1", e.target.value);
});

document.getElementById("feature-1-paragraph").addEventListener("input", function (e) {
    updateElement("paragraph-feature-1", e.target.value);
});

document.getElementById("feature-2-h3").addEventListener("input", function (e) {
    updateElement("h3-feature-2", e.target.value);
});

document.getElementById("feature-2-paragraph").addEventListener("input", function (e) {
    updateElement("paragraph-feature-2", e.target.value);
});

// Initialize the content of the elements with the default values.
updateElement("main-h1", document.getElementById("header-h1").value);
updateElement("main-header-button", document.getElementById("header-button").value);
updateElement("main-h2", document.getElementById("intro-h2").value);
updateElement("main-paragraph", document.getElementById("intro-paragraph").value);
updateElement("main-intro-button", document.getElementById("intro-button").value);
updateElement("h3-feature-1", document.getElementById("feature-1-h3").value);
updateElement("paragraph-feature-1", document.getElementById("feature-1-paragraph").value);
updateElement("h3-feature-2", document.getElementById("feature-2-h3").value);
updateElement("paragraph-feature-2", document.getElementById("feature-2-paragraph").value);

document.getElementById("export-button").addEventListener("click", function () {
    const mainPage = document.querySelector(".main-page").outerHTML;
    const css = `
        <style>
            body {
                font-family: Helvetica, Arial, sans-serif;
                display: flex;
                justify-content: space-around;
                margin: 0;
                box-sizing: border-box;
                height: 100vh;
                overflow-x: hidden;
                color: #333;
            }

            h1 {
                font-size: 1.125rem;
            }

            h2 {
                font-size: 1.5rem;
            }

            p {
                max-width: 640px;
                width: 100%;
            }

            .intro-section h2 {
                font-size: 3.5rem;
                margin: 0;
                width: 80%;
                line-height: 1.2;
            }

            .main-page {
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                box-sizing: border-box;
                overflow-y: auto;
                position: relative;
            }

            .wrapper {
                max-width: 1280px;
                width: 100%;
                margin: 0 auto;
                padding: 0 2rem;
                box-sizing: border-box;
            }

            header {
                position: fixed;
                top: 0;
                padding: 1rem 0;
                left: 0;
                right: 0;
                background-color: white;
            }

            header .wrapper {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: row;
            }

            header button {
                margin: 0;
            }

            .intro-section {
                display: flex;
                flex-direction: column;
                justify-content: center;
                min-height: 100vh;
            }

            .intro-section button {
                margin: 1rem 0 0 0;
            }

            .intro-section h2 {
                width: 90%;
            }

            button {
                border: 1px solid rgba(0,0,0,0.15);
                background-color: white;
                color: #333;
                padding: .75rem 1rem;
                border-radius: .25rem;
                cursor: pointer;
                width: max-content;
                margin: 1rem 0;
                font-weight: bold;
            }

            button.primary {
                background-color: #333;
                color: white;
                border: none;
            }

            .description {
                display: flex;
                flex-direction: column;
                width: 50%;
                justify-content: center;
            }

            .description h3 {
                margin: 0 0 .5rem 0;
                font-size: 2rem;
            }

            .description p {
                margin: .5rem 0;
            }

            .card:first-of-type {
                padding-top: 0;
            }

            .card {
                display: flex;
                flex-direction: row;
                padding: 3rem 0;
            }

            .feature-section img {
                width: 50%;
                max-width: 768px;
                margin: 0 0 0 2rem;
            }

            .flip {
                order: 2;
            }

            .flip + img {
                margin: 0 2rem 0 0;
            }

            .properties-button {
                position: fixed;
                bottom: 0;
                width: 239px;
                background-color: white;
                left: 0;
                display: flex;
                justify-content: center;
                border-top: 1px solid rgba(0,0,0,0.15);
            }

            .properties-button button {
                margin: .75rem 0;
            }

        </style>
        `;

const htmlContent = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Exported Page</title>
            ${css}
        </head>
        <body>
            ${mainPage}
        </body>
        </html>
            `;

    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "exported-page.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


