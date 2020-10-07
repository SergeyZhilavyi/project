function CurrencyFormatted(amount) {
    let i = parseFloat(amount.replace(/,/g, '.'));
    if(isNaN(i)) return '0.00';
    let minus = '';
    if(i < 0) { minus = '-'; }
    i = Math.abs(i);
    i = parseInt((i + 0.005) * 100)/100;
    let s =  String(i);
    if(s.indexOf('.') < 0) { s += '.00'; }
    if(s.indexOf('.') == (s.length - 2)) { s += '0'; }
    s = minus + s;
    return s;
}
 document.writeln('12,006 -&gt; '+CurrencyFormatted('12,006'));
 document.writeln('0,3 -&gt; '+CurrencyFormatted('0,3'));
 document.writeln('5 -&gt; '+CurrencyFormatted('5'));