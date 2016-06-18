use CGI;
use CGI::Carp(fatalsToBrowser);

print "Content-type:text/plain\n\n";

foreach (sort keys %ENV) {
  print "$_: $ENV{$_}\n";
}

