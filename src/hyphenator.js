var hypernate = function(text) {
  var RUS_A = "[абвгдеёжзийклмнопрстуфхцчшщъыьэюя]";
  var RUS_V = "[аеёиоуыэюя]";
  var RUS_N = "[бвгджзклмнпрстфхцчшщ]";
  var RUS_X = "[йъь]";

  var rules = [
    '(' + RUS_X + ')(' + RUS_A + + RUS_A + ')',
    '(' + RUS_V + ')(' + RUS_V +  RUS_A + ')',
    '(' + RUS_V + RUS_N + ')(' +  RUS_N + RUS_V + ')',
    '(' + RUS_N + RUS_V + ')(' +  RUS_N + RUS_V + ')',
    '(' + RUS_V + RUS_N + ')(' +  RUS_N + RUS_N + RUS_V + ')',
    '(' + RUS_V + RUS_N + RUS_N + ')(' + RUS_N + RUS_N + RUS_V + ')'
  ];

  [].forEach.call(rules, function(rule) {
    while (true) {
      var t = text.replace(new RegExp(rule, 'ig'), '$1&shy;$2');
      if (t == text) break;
      text = t;
    }
  });

  return text;
};
