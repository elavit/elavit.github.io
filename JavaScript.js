$('#submit').click(function() {

  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var file = document.getElementById("file");
  $.ajax({
  type: “POST”,
  url: “https://mandrillapp.com/api/1.0/messages/send.json”,
  data: {
    ‘key’: ‘1d9b36f2464ad881bc715d37e550468f-us15’,
    ‘message’: {
      ‘from_email’: email,
      ‘to’: [
          {
            ‘email’: ‘abhishek.shivakumar@gmail.com’,
            ‘name’: name,
            ‘type’: ‘to’
          },
        ],
      ‘autotext’: ‘true’,
      ‘subject’: ‘Creative Writing’,
      ‘html’: 'lol'
    }
  }
 }).done(function(response) {
  // console.log(response); // if you're into that sorta thing
 });
 });
