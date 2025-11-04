Cypress.Commands.add ('validaCredencial', () => {
    let credencial = {user: "", password: ""}

    before(() => {
        const envUser = Cypress.env("LOGIN_EMAIL");
        const enviPass = Cypress.env("LOGIN_PASSWORD");

        if (envUser && enviPass) {
            credencial.user = envUser;
            credencial.password = enviPass;
            return;
        }

        cypress.readFile("cypress/fixtures/login.json", {log: false}).then((data) => {
            credencial.user = data.user || data.email;
            credencial.password = data.password || data.pass;
        }).then(() => {
            if (!credencial.user || !credencial.password) {
                throw new Error("Credenciais não encontradas. Defina LOGIN_EMAIL/LOGIN_PASSWORD (ou CYPRESS...) ou crie  cypress/fixtures/login.json");
            }
        });
    });
})