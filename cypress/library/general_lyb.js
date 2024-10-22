



    createIntercept(method, url) {
        return cy.intercept(method, url);                //need to return so i can use in alias.as
    }

    createSession(sessionId, setupFnc) {
        cy.session(sessionId, setupFnc);
    }
}


module.exports = new General();