#!/usr/bin/perl

use CGI;
use CGI::Carp(fatalsToBrowser);

my @lines = do {
    open my $handle, "<", "index.html"
        or die "Could not open index.html: $!";
    <$handle>;
};

print "Content-type: text/html\n\n";

print @lines;

exit 0;
