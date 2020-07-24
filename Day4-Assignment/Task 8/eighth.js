let ask = (question,yes,no) => confirm(question) ?
yes() : no()
      ask ("Do you agree?",
      ()=>alert("You agreed."),
      ()=>alert("You cancelled the execution.")
      )