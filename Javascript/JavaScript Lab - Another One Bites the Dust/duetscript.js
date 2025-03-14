const lyrics = [
    //Verse one
    { time: 0, voice: "f", text: "Are you ready, hey, are you ready for this?" },
    { time: 2.3, voice: "f", text: "Are you hanging on the edge of your seat?" },
    { time: 4, voice: "w", text: "I need a break, uh" },
    { time: 4.7, voice: "f", text: "Are you ready, hey, are you ready for this?" },
    { time: 6.7, voice: "f", text: "Are you hanging on the edge of your seat?" },
    { time: 8.5, voice: "w", text: "I need a break beat, uh" },
    { time: 9.3, voice: "f", text: "Are you ready, hey, are you ready for this?" },
    { time: 11.5, voice: "f", text: "Are you hanging on the edge of your seat?" },
    { time: 13, voice: "w", text: "I need a break beat, uh" },
    { time: 14, voice: "f", text: "Outta the doorway the bullets rip" },
    { time: 16, voice: "f", text: "Repeating to the sound of the beat, hey" },
    { time: 17.7, voice: "w", text: "Yo, a for the kids in the club that's ready to get bugged" },
    { time: 21, voice: "f", text: "Another one bites the dust" },
    { time: 22.8, voice: "w", text: "And for the thugs with the burners that wanna blast off" },
    { time: 25.5, voice: "f", text: "Another one bites the dust" },
    { time: 27, voice: "w", text: "And for the kids on the blocks, shootin' at the crooked cops—blaow!" },
    { time: 29.5, voice: "f", text: "Another one bites the dust" },
    { time: 31.7, voice: "f", text: "And another one gone" },
    { time: 32.3, voice: "w", text: "Wyclef" },
    { time: 33.5, voice: "w", text: "Dirty Cash" },
    { time: 34, voice: "f", text: "Another one bites the dust" },
    { time: 34.7, voice: "w", text: "Young Free, Freddie where you at?" },

    // Verse two
    { time: 37.4, voice: "w", text: "Steve walks wearily down the street" },
    { time: 38, voice: "w", text: "With the brim pulled way down low" },
    { time: 41.2, voice: "w", text: "Some cat up in Brooklyn just got robbed with a Kangol" },
    { time: 45, voice: "f", text: "Are you ready, hey, are you ready for this?" },
    { time: 47.7, voice: "f", text: "Are you hanging on the edge of your seat?" },
    { time: 50, voice: "f", text: "Out of the doorway, the bullets rip" },
    { time: 52.3, voice: "f", text: "Repeating to the sound of the beat, hey" },
    { time: 54.5, voice: "w", text: "My man got shot, and the block got hot" },
    { time: 56.7, voice: "f", text: "Another one bites the dust" },
    { time: 58.5, voice: "w", text: "Yo, hey I hear more shots, this is like Fort Knox, kid" },
    { time: 61.4, voice: "f", text: "Another one bites the dust" },
    { time: 63, voice: "w", text: "Yo, hold your breath" },
    { time: 63, voice: "f", text: "And another one gone" },
    { time: 65, voice: "w", text: "Hold your breath" },
    { time: 65, voice: "f", text: "And another one gone" },
    { time: 67, voice: "w", text: "Yo, check it" },

    //Verse three
    { time: 67.8, voice: "w", text: "If you're a soldier at ease" },
    { time: 69.3, voice: "w", text: "My military style is known to murder Nazis" },
    { time: 71.5, voice: "w", text: "Brooklyn to Germany" },
    { time: 72, voice: "f", text: "Oh yeah" },
    { time: 72.5, voice: "w", text: "come on" },
    { time: 73, voice: "w", text: "My kamikaze will blow the U2" },
    { time: 75, voice: "w", text: "They hire Idi Amin in Timbuktu" },
    { time: 77.5, voice: "w", text: "Whether you Hindu, or do the Voodoo" },
    { time: 79.5, voice: "w", text: "You can't foresee this unless I bring the previews, yeah, yeah" },
    { time: 83.7, voice: "w", text: "Yo, it's the number one rappin' band" },
    { time: 85, voice: "f", text: "Come on" },
    { time: 86, voice: "w", text: "Yo, this review will be critically acclaimed" },
    { time: 88.6, voice: "w", text: "Leave you in critical pain, clinically insane" },
    { time: 91, voice: "w", text: "The name Wyclef Jean, with a yes, yes y'all" },
    { time: 93.4, voice: "w", text: "Better have a vest y'all, I'll blast, and bless y'all" },
    { time: 94, voice: "f", text: "Oh yeah" },
    { time: 95.6, voice: "w", text: "F-y'all, the mark of the beast, the triple six" },
    { time: 97.7, voice: "w", text: "Time running out, listen to the tick" },
    { time: 99, voice: "f", text: "Oh yeah" },
    { time: 100, voice: "w", text: "If you see what I saw, then you seen what I seen" },
    { time: 102, voice: "w", text: "If you know what I know, you know what I mean" },
    { time: 103.5, voice: "f", text: "Oh yeah" },
    { time: 104.5, voice: "w", text: "Commanding officer of the Navy SEAL team" },
    { time: 106.7, voice: "w", text: "Once I give the orders, you feel the infrared beam" },
    { time: 108, voice: "f", text: "Oh yeah" },
    { time: 109, voice: "w", text: "Blaow!" },
    { time: 109.6, voice: "w", text: "For all you critics, sayin' \"another remake\"" },
    { time: 111.5, voice: "f", text: "Another one bites the dust" },
    { time: 113, voice: "w", text: "Yo, if you know the deal, this is the master reel, kid" },
    { time: 115.5, voice: "f", text: "Another one bites the dust" },
    { time: 117, voice: "w", text: "Oh yeah" },
    { time: 118, voice: "f", text: "And another one gone" },
    { time: 118.7, voice: "w", text: "Right" },
    { time: 119, voice: "f", text: "And another one gone" },
    { time: 119.7, voice: "w", text: "Right" },
    { time: 120, voice: "f", text: "Another one bites the dust, hey" },
    { time: 121.3, voice: "w", text: " Freddie Mercury, where you at yo?" },

    //Verse four
    { time: 123, voice: "f", text: "How do you think I'm gonna get along" },
    { time: 124.7, voice: "f", text: "Without you when you're gone" },
    { time: 126.5, voice: "f", text: "Oh yeah" },
    { time: 126, voice: "w", text: "I need a break yo" },
    { time: 127, voice: "w", text: "If you're ready for the first of the month" },
    { time: 129, voice: "w", text: "For that welfare check, come on" },
    { time: 129.7, voice: "f", text: "Kicked me out on my own" },
    { time: 131, voice: "w", text: "I need a break beat" },
    { time: 131.7, voice: "f", text: "Are you happy, are you satisfied?" },
    { time: 133.7, voice: "f", text: "How long can you stand the heat?" },
    { time: 135, voice: "w", text: "I need a break beat" },
    { time: 136.3, voice: "f", text: "Outta the doorway, the bullets rip" },
    { time: 139, voice: "f", text: "To the sound of the beat, look out" },
    { time: 140.3, voice: "w", text: "Yo, bulletproof vests, like the wild, wild west" },
    { time: 143, voice: "f", text: "Another one bites the dust" },
    { time: 144.5, voice: "w", text: "Yo, this is a stickup, now take off your Rolex" },
    { time: 147.5, voice: "f", text: "Another one bites the dust" },
    { time: 149.7, voice: "w", text: "Yo, dirty money, good money, yo it's all money-money" },
    { time: 152, voice: "f", text: "Another one bites the dust" },
    { time: 153.7, voice: "w", text: "Yo, Dirty Cash" },
    { time: 154, voice: "f", text: "And another one gone" },
    { time: 155, voice: "w", text: "Dirty Cash" },
    { time: 155, voice: "f", text: "And another one gone" },
    { time: 156.5, voice: "w", text: "The adventures of Dirty Cash" },
    { time: 156.5, voice: "f", text: "Another one bites the dust" },

    //Verse five
    { time: 158, voice: "p", text: "Yo, for the love for the cash, I'll blast you in my path" },
    { time: 160.5, voice: "p", text: "Keep my eyes on the math, you cats don't know the half" },
    { time: 162.5, voice: "f", text: "Oh yeah" },
    { time: 163.7, voice: "p", text: "As far as I'm concerned, you cats can burn in flames" },
    { time: 165.7, voice: "p", text: "This ain't no game, I'mma start callin' names" },
    { time: 167, voice: "f", text: "Oh yeah" },
    { time: 167.8, voice: "p", text: "So come get me, if you know the one-fifty" },
    { time: 170, voice: "p", text: "A million refugees ready to bust with me" },
    { time: 171.5, voice: "f", text: "Oh yeah" },
    { time: 172.7, voice: "p", text: "Bloody, filthy, in this rap shhh—" },
    { time: 174.7, voice: "p", text: "You gonna have to kill me, since you can't beat me" },
    { time: 175.7, voice: "f", text: "Oh yeah" },
    { time: 176.8, voice: "p", text: "Pras, Dirty, Cash, you're the greedy" },
    { time: 179.3, voice: "p", text: "Believe me, you gotta let me fly like R. Kelly" },
    { time: 180.6, voice: "f", text: "Oh yeah" },
    { time: 181.6, voice: "p", text: "Bite another dust with my man Freddie Mercury" },
    { time: 183.7, voice: "p", text: "What height nineties got ya cash, wannabe crazy" },
    { time: 185, voice: "f", text: "Oh yeah" },
    { time: 185.5, voice: "p", text: "Navy SEAL!" },

    //Verse six
    { time: 186, voice: "e", text: "Practically, I tactically destroy" },
    { time: 188, voice: "e", text: "Deploy more decoys than a presidential convoy" },
    { time: 189.5, voice: "f", text: "Oh yeah" },
    { time: 190.4, voice: "e", text: "My whole envoy stay camouflaged out" },
    { time: 192.7, voice: "e", text: "And when I walk the street, I take the refugee route" },
    { time: 194.3, voice: "f", text: "Oh yeah" },
    { time: 195, voice: "e", text: "This one go out to all my thugs in the borough" },
    { time: 197.6, voice: "e", text: "Soldiers stay thorough, like Kilamanjaro" },
    { time: 198.7, voice: "f", text: "Oh yeah" },
    { time: 199.6, voice: "e", text: "Split it with an arrow, my girl platoon roll" },
    { time: 201.7, voice: "e", text: "Outta control, the female Mandingos" },
    { time: 203.2, voice: "f", text: "Oh yeah" },
    { time: 204, voice: "e", text: "Free, I evolve from the egg of a seminarian" },
    { time: 206.7, voice: "e", text: "Don't go down, 'cause I'm a vegetarian" },
    { time: 207.7, voice: "f", text: "Oh yeah" },
    { time: 208.7, voice: "e", text: "And when I bust, it ain't \"in God we trust\"" },
    { time: 211, voice: "e", text: "And if you bring a gun, you better bring a black tusk" },
    { time: 212.5, voice: "f", text: "Oh yeah" },
    
    //Outro
    { time: 213, voice: "w", text: "She looked into my eyes and said FBI" },
    { time: 215.5, voice: "f", text: "Another one bites the dust" },
    { time: 217, voice: "f", text: "Oh yeah" },
    { time: 217.5, voice: "w", text: "She said she loved me, she was a spy who lied" },
    { time: 220, voice: "f", text: "Another one bites the dust" },
    { time: 221, voice: "w", text: "Right" },
    { time: 222.5, voice: "w", text: "I could relate, could you relate?" },
    { time: 224.5, voice: "f", text: "Another one bites the dust" },
    { time: 227, voice: "w", text: "Jerry \"Wonda\", The Product" },
    //{ time: 250, voice: "g", text: "Oh-oh" },
    { time: 229, voice: "f", text: "Another one bites the dust" },
    { time: 231, voice: "w", text: "Yo, Canibus, John Forté" },
    //{ time: 231, voice: "g", text: "Don't you know we coming for you?" },
    { time: 233.7, voice: "f", text: "Another one bites the dust" },
    { time: 235, voice: "w", text: "Yo, Dirty Cash, and baby Free" },
    { time: 238, voice: "f", text: "Another one bites the dust" },
    { time: 240, voice: "f", text: "And another one gone" },
    { time: 240.5, voice: "w", text: "Wyclef Jean" },
    { time: 241, voice: "f", text: "And another one gone" },
    { time: 241.3, voice: "w", text: "Freddie Mercury, ha-ha" },
    { time: 243, voice: "f", text: "Another one bites the dust, yeah" },
    { time: 244, voice: "w", text: "I'm out baby" },
    { time: 246, voice: "e", text: "Navy SEALs!" },
    { time: 247, voice: "f", text: "Another one bites the dust" },
    { time: 252.5, voice: "f", text: "Another one bites the dust" },
    { time: 256, voice: "f", text: "Another one bites the dust" },
    /*{ time: , voice: "", text: "" },
    { time: 250, voice: "", text: "" },
    { time: , voice: "", text: "" },*/
];
let currentLyricIndex = 0;
const audio = document.getElementById("audio");
const lyricElement = document.getElementById("lyric-freddie");
const lyricElementoth = document.getElementById("lyric-others")
let voice = ""
audio.addEventListener("play", () => {
    setInterval(displayLyrics, 100);
});
function displayLyrics() {
    const currentTime = audio.currentTime;
    //lyricElement.textContent = currentTime
    if
        (currentLyricIndex < lyrics.length &&
        currentTime >= lyrics[currentLyricIndex].time) {
        if (lyrics[currentLyricIndex].voice == 'f') {
            voice = "Freddie Mercury: ";
            lyricElement.textContent = voice + lyrics[currentLyricIndex].text;
            currentLyricIndex++;
        }
        else if (lyrics[currentLyricIndex].voice == 'p') {
            lyricElementoth.textContent = "Pras: " + lyrics[currentLyricIndex].text;
            currentLyricIndex++;
        }
        else if (lyrics[currentLyricIndex].voice == 'e') {
            lyricElementoth.textContent = "Free: " + lyrics[currentLyricIndex].text;
            currentLyricIndex++;
        }
        else {
            voice = "Wycleff Jean: ";
            lyricElementoth.textContent = voice + lyrics[currentLyricIndex].text;
            currentLyricIndex++;
        }
        /*elif lyrics[currentLyricIndex].voice == 'w' {
            lyrics[currentLyricIndex].voice = "Wycleff Jean"
        }
        elif lyrics[currentLyricIndex].voice == 'w' {
            lyrics[currentLyricIndex].voice = "Wycleff Jean"
        }*/

    }
}

