(function () {
    //
    $(document).ready(function () {
      let old;
      $("#content__card__first").hover(
        function () {
          old = $("#content__card__title__first").css("color");
          $("#content__card__title__first").css("color", "red");
          $("#content__card__title__first").css("font-weight", "600");
        },
        function () {
          $("#content__card__title__first").css("color", old);
          $("#content__card__title__first").css("font-weight", "400");
        }
      );
    });
    $(document).ready(function () {
      let old;
      $("#content__card__second").hover(
        function () {
          old = $("#content__card__title__second").css("color");
          $("#content__card__title__second").css("color", "red");
          $("#content__card__title__second").css("font-weight", "600");
        },
        function () {
          $("#content__card__title__second").css("color", old);
          $("#content__card__title__second").css("font-weight", "400");
        }
      );
    });
    $(document).ready(function () {
      let old;
      $("#content__card__third").hover(
        function () {
          old = $("#content__card__title__third").css("color");
          $("#content__card__title__third").css("color", "red");
          $("#content__card__title__third").css("font-weight", "600");
        },
        function () {
          $("#content__card__title__third").css("color", old);
          $("#content__card__title__third").css("font-weight", "400");
        }
      );
    });
    $(document).ready(function () {
      let old;
      $("#content__card__four").hover(
        function () {
          old = $("#content__card__title__four").css("color");
          $("#content__card__title__four").css("color", "red");
          $("#content__card__title__four").css("font-weight", "600");
        },
        function () {
          $("#content__card__title__four").css("color", old);
          $("#content__card__title__four").css("font-weight", "400");
        }
      );
    });
    // popup
  
    $(".link").on("click", function () {
      $(".popup__overlay, .popup__content")
        .first()
        .show("fast")
        .addClass("active");
    });
  
    $(".btn__close").on("click", function () {
      $(".popup__overlay, .popup__content").hide(1500).removeClass("active");
    });
    $(".btn__join").hover(
      function () {
        $(".btn__join").css("transform", "rotate(25deg)");
        $(".btn__join").css("opacity", "0.9");
      },
      function () {
        $(".btn__join").css("transform", "rotate(0deg)");
        $(".btn__join").css("opacity", "1");
      }
    );
  
    // validation
  
    jQuery(function ($) {
      $("#register").on("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
          return false
        }
        const form = $(this);
        const actionUrl = form.attr('action');

        $.ajax({
            type: "POST",
            url: actionUrl,
            data: form.serialize(), // serializes the form's elements.
            success: function(data){
                alert(data); // show response from the php script.
            }
      });
    })
      function validateForm() {
        $(".text-error").remove();
  
        // name
        const elFirstName = $(".first__name, .last__name");
        const valFirstName = true;
        if (elFirstName.val().length < 4) {
          elFirstName.after(
            '<span class="text-error for-name">First Name must be more than 3 characters </span>'
          );
          $(".for-name").css({
            top: elFirstName.position().top + elFirstName.outerHeight() + 2,
          });
        }
        $(".first__name, .last__name").toggleClass("error", valFirstName);
  
        // // email
  
        const registration =
          /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
        const elEmail = $("#email");
        const validationEmail = elEmail.val() ? false : true;
  
        if (validationEmail) {
          elEmail.after(
            '<span class="text-error for-email">The e-mail field is required</span>'
          );
          $(".for-email").css({
            top: elEmail.position().top + elEmail.outerHeight() + 2,
          });
        } else if (!registration.test(elEmail.val())) {
          validationEmail = true;
          elEmail.after(
            '<span class="text-error for-email">You have specified an invalid e-mail</span>'
          );
          $(".for-email").css({
            top: elEmail.position().top + elEmail.outerHeight() + 2,
          });
        }
        $("#email").toggleClass("error", validationEmail);
  
        // password
        const elPassword = $("#password");
        const elConfPassword = $("#confirm__password");
  
        let validatePassword = elPassword.val() ? false : true;
        let validateConfPassword = elConfPassword.val() ? false : true;
  
        if (elPassword.val() != elConfPassword.val()) {
          validatePassword = true;
          validateConfPassword = true;
          elPassword.after(
            '<span class="text-error for-pass">The password must be at least 6 characters long</span>'
          );
          $(".for-pass").css({
            top: elPassword.position().top + elPassword.outerHeight() + 2,
          });
        }
        $("#password").toggleClass("error", validatePassword);
        $("#confirm__password").toggleClass("error", validateConfPassword);
        return (
          valFirstName ||
          validationEmail ||
          validatePassword ||
          validateConfPassword
        );
      }
    });
  })();
  