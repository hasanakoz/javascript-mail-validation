//Write a function that takes email variable and return true or false and write console invalid or
// valid. Valid characters in the email address will be 'abcdefghijklmnopqrstuvwxyz0123456789_+.@' P.S. :
// Capital letters are allowed.
// An email should not start with '@' symbol and should not contain more than one '@' sign.
// There should be at least two characters after the '.' sign. (like .co or .com)
// There should be at least one '. after the '@' sign.

let emailValidate = (mail) => {
  let charValid = "abcdefghijklmnopqrstuvwxyz0123456789_+.@".split("");
  let charValidUpperCase = [];
  for (i of charValid) {
    charValidUpperCase.push(i.toUpperCase());
  }

  let validEmail = true;
  let c = 0;
  let splittedMail = mail.split("");
  let afterDot = mail.split(".");
  for (i of splittedMail) {
    if (
      charValid.includes(i) == false &&
      charValidUpperCase.includes(i) == false
    ) {
      validEmail = false;
    } else if (i === "@") {
      c++;
      if (c > 1) {
        validEmail = false;
      }
    }
  }

  if (splittedMail[0] === "@") {
    validEmail = false;
  } else if (splittedMail.includes(".", splittedMail.indexOf("@")) == false) {
    validEmail = false;
  } else if (afterDot[afterDot.length - 1].length < 2) {
    validEmail = false;
  }
  console.log(validEmail);
};

emailValidate("name.last_Name@company");
