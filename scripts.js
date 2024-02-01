document.addEventListener("DOMContentLoaded", function () {
    const consultButton = document.getElementById("consultButton");
    const jsonData = document.getElementById("jsonData");

    consultButton.addEventListener("click", function () {

        const apiUrl = "https://reqres.in/api/users/2";

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {

                jsonData.innerHTML = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
            })
            .catch(error => {
                console.error("Erro ao consultar a API:", error);
                jsonData.innerHTML = "<p>Erro ao consultar a API. Verifique o console para mais detalhes.</p>";
            });
    });
});
