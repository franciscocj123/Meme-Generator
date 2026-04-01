document.addEventListener("DOMContentLoaded", function() {

    const memeForm = document.getElementById("memeForm");
    const imgUrlInput = document.getElementById("imgUrl");
    const textTopInput = document.getElementById("textTop");
    const textBottomInput = document.getElementById("textBottom");

    const memeContainer = document.createElement("div");
    memeContainer.id = "memeContainer";
    document.body.appendChild(memeContainer);

    memeForm.addEventListener("submit",function(e) {
        e.preventDefault();

        const memeDiv = document.createElement("div");
        memeDiv.classList.add("memeDiv")



        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.classList.add("delete-button");


        deleteBtn.addEventListener("click", function() {
            memeDiv.remove();
        })


        const imgUrlValue = imgUrlInput.value;
        const topTextValue = textTopInput.value;
        const bottomTextValue = textBottomInput.value;


        const img = document.createElement("img");
        img.src = imgUrlValue;

        const topTextElement = document.createElement("p");
        topTextElement.innerText = topTextValue
        topTextElement.classList.add("top-text");

        const bottomTextElement = document.createElement("p");
        bottomTextElement.innerText = bottomTextValue;
        bottomTextElement.classList.add("bottom-text");


        memeDiv.append(deleteBtn, img, topTextElement, bottomTextElement)

        memeContainer.appendChild(memeDiv);






    })
})