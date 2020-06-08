
describe("This element test", function(){

    it("This enter values", function(){
        browser.url('/');
        const search = $('#twotabsearchtextbox');
        search.setValue('Apple book');

    });


});