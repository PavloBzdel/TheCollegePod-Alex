(async function () {
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
    $(".popup__overlay, .popup__content").addClass("active");
  });

  $(".btn__close").on("click", function () {
    $(".popup__overlay, .popup__content").removeClass("active");
  });
  $("#btn__join").hover(
    function () {
      $("#btn__join").css("transform", "rotate(25deg)");
      $("#btn__join").css("opacity", "0.9");
    },
    function () {
      $("#btn__join").css("transform", "rotate(0deg)");
      $("#btn__join").css("opacity", "1");
    }
  );

  // validation
  $(document).ready(function () {
    $("#register").submit(function (e) {
      e.preventDefault();
      $("#btn__join").click(function () {
        sendAjaxForm("result_form", "ajax_form", "action_ajax_form.php");
        return false;
      });
      function sendAjaxForm() {
        const form = $("#register");
        const actionUrl = form.attr("action");
        $.ajax({
          url: actionUrl,
          type: "POST",
          data: $(form).serialize(),
          success: function (response) {
            $("#box").html(response);
          },
          error: function () {
            $("#box").html("Error");
          },
        });
      }

      const firstName = $("#first__name").val();
      const lastName = $("#last__name").val();
      const email = $("#email").val();
      const password = $("#password").val();
      const confirmPassword = $("#confirm__password").val();
      $(".error").remove();

      if (firstName.length <= 1) {
        $("first__name").after(
          '<span class="error">First Name must be more than 1 characters</span>'
        );
      }
      if (lastName.length <= 2) {
        $("#last__name").after(
          '<span class="error">Last Name must be more than 2 characters</span>'
        );
      }
      if (email.length < 1) {
        $("#email").after(
          '<span class="error">The e-mail field is required</span>'
        );
      } else {
        const regEx =
          /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
        const validEmail = regEx.test(email);
        if (!validEmail) {
          $("#email").after('<span class="error">Enter a valid email</span>');
        }
      }
      if (password.length < 8) {
        $("#password").after(
          '<span class="error">Password must be at least 8 characters long</span>'
        );
      }
      if (confirmPassword != password) {
        $("#confirm__password").after(
          '<span class="error">Passwords must be the same</span>'
        );
      }
    });
  });
})();
