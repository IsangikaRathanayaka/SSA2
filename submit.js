$(document).ready(function(){
     
          var clientId = "588609167741-ohbbiqnddh4ofhfoe854b0k15upfc06l.apps.googleusercontent.com";

         var redirect_uri = "http://localhost:8080/upload/send.html";

         var scope = "https://www.googleapis.com/auth/drive";

          var url = "http://localhost:8080/upload/send.html";

   
     $("#Auth4").click(function(){

             signIn(clientId,redirect_uri,scope,url);

     });

     function signIn(clientId,redirect_uri,scope,url){
      
        url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_uri
        +"&prompt=consent&response_type=code&client_id="+clientId+"&scope="+scope
        +"&access_type=offline";

          window.location = url;

     }
});
