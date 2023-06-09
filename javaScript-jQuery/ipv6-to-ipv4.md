
```
/* Convert IPv6 address to IPv4 address */ 

function IP6to4(ip6) {
    function parseIp6(ip6str) {
        const str = ip6str.toString();

        // Initialize
        const ar = new Array();
        for (var i = 0; i < 8; i++) ar[i] = 0;

        // Check for trivial IPs
        if (str == '::') return ar;
        
        // Parse
        const sar = str.split(':');
        let slen = sar.length;
        if (slen > 8) slen = 8;
        let j = 0;
        i = 0
        for (i = 0; i < slen; i++) {
            // This is a "::", switch to end-run mode
            if (i && sar[i] == '') {
                j = 9 - slen + i;
                continue;
            }
            ar[j] = parseInt(`0x0${sar[i]}`);
            j++;
        }

        return ar;
    }

    var ip6parsed = parseIp6(ip6);
    const ip4 = `${ip6parsed[6] >> 8}.${ip6parsed[6] & 0xff}.${ip6parsed[7] >> 8}.${ip6parsed[7] & 0xff}`;
    return ip4;
}

/* Usage */
const ipAddress = '0:0:0:0:0:FFFF:7F00:0001';
document.getElementById("ipAddress").innerText = IP6to4(ipAddress);
```

source script found here: 

[How can I convert IPV6 address to IPV4 address?](https://stackoverflow.com/questions/2786632/how-can-i-convert-ipv6-address-to-ipv4-address)

example usage: https://jsfiddle.net/asheroto/u7hfjm9k/

