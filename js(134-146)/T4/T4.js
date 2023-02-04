let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

/*

1. http =>start with

2. s? => is optional

3. :\/\/ => :// and using scapesequance to avoid interaptor error

4. (?:[-\w]+\.)? => ( ?: => that mean will capture this section [-one or more letter] then followed by . using scape sequane to ignore compiler )this section may be founded or not

5. ([-\w]+)\. => [-\one or more letter]  then any char except newline and line terminal )this section may be founded or not

6. \w+ => one or more letter

7. (?:\.\w+) => (?:=> that mean will capture this section \followed by . using scape sequane to ignore compiler \one or more letter) this section may be founded or not

8. \/? => scape sequance to allow / to apper and this char may be founded our not

9. .* =>  .(any char except newline and line terminal) and *(this may be founded or not)

10. i => insensitive letter

*/