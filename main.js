var win = 0;
   var loss = 0;
   var tie = 0;
   for(i = 0; i < 3; i++) {
   
   var userChoice = prompt("Please choose rock, paper, or scissors?");
   if (! userChoice) {
       document.write("<p>Player 1, unknown choice, please refresh screen and choose again</p>");
   } else {
       document.write("<p>Player 1:" + " " + userChoice + "</p>");
   }
   var computerChoice = Math.random();
   if (computerChoice < 0.34) {
       computerChoice = "rock";
   } else if(computerChoice <= 0.67) {
       computerChoice = "paper";
   } else {
       computerChoice = "scissors";
   }
   
   document.write("<p>Computer:" + " " + computerChoice + "</p>");
   var compare = function(choice1,choice2) {
       if (choice1 === choice2) {
           tie+=1;
           return "It's a tie!";
       }
       if (choice1 === "rock") {
           if (choice2 === "scissors") {
               win+=1;
               return "You win!";
           } else {
               loss+=1;
               return "You lose! Try again.";
           }
       }
       if (choice1 === "paper") {
           if (choice2 === "rock") {
               win+=1;
               return "You win!";
           } else {
               loss+=1;
               return "You lose! Try again.";
           }
       }
       if (choice1 === "scissors") {
           if (choice2 === "rock") {
               loss+=1;
               return "You lose! Try again.";
           } else {
               win+=1;
               return "You win!";
           }
       }
   };
   var results = compare(userChoice,computerChoice);
   
   document.write("<br><hr><b>Results: </b>" + results);
   
   }
   document.write("<br/>Final Results: W-"+win+"; L-"+loss+"; T-"+tie+";");



   /* $(document).ready( function() {
        $('#plan').on('change', function() {
          var priceText;
      
          switch(this.value) {
            case 'monthly':
              priceText = '$10.00 /mo';
              break;
            case 'quarterly':
              priceText = '$9.00 /mo';
              break;
            case 'yearly':
              priceText = '$7.00 /mo';
              break;
          }
          $('#price').text(priceText)
        });
    });
    
    
    
    function updateTotal() {
        var total = 0;
        var entries = $('.entry')

        if (entries.length)
          $('#empty').show();
        else
          $('#empty').hide();
    
        $('.entry').each( function(index, entry) {
          var data = $(entry).data();
          var price = parseFloat(data.price)
          var installment = data.plan
          switch(installment) {
            case 'monthly':
              total += price;
              break;
            case 'quarterly':
              total += price * 4;
              break;
            case 'yearly':
              total += price * 12;
              break;
          }
        })
    
        $('#total').text('$' + total);
     }

  $('#add').on('click', function() {
    var plan = $('#plan')
    var installment = plan.val();
    var price = $('#price').text();
    var inCart = $('#in_cart');
    var numeric = price.replace(/[[A-Za-z$\/\s]/g, '');
    var data = 'data-price="' + numeric + '" data-plan="' + installment + '"';
    inCart.append('<li class="entry"' + data + '>' + installment + ' - ' + price + '<button class="remove">X</button></li>');
    updateTotal();
  });

  $(document).on('click', '.remove', function() {
      $(this).parents('li').remove();
      updateTotal();
  });

  $('#empty').on('click', function() {
    $('#in_cart').empty();
    updateTotal();
  });

$('#display_cart').on('click', function() {
    var cart = $('#cart');
    var button = $(this);
    if (button.text() === 'Hide Cart')
      button.text('Show Cart')
    else
      button.text('Hide Cart');
  
    cart.slideToggle();
  });

  $('#purchase').on('click', function() {
    $('#complete')
      .html('<h2>PURCHASE COMPLETE<h2>')
      .css({
        'background-color': '#bca',
        'width': '25%',
        'border': '1px solid green',
        'text-align': 'center'
      })
      .animate({
        width: "70%",
        opacity: 0.4,
        marginLeft: "0.6in",
        fontSize: "3em",
        borderWidth: "10px"
      }, 1500 );
    });

    */

   