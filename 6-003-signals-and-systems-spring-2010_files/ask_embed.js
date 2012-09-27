// Ask an engineer embeddable widget
; // we start with a semicolon in case there’s open HTML on the page
if(ask_mit==null) { // if no settings are specified
	var ask_mit = {}; // create an empty settings object
}
// Set defaults
ask_mit.background = ask_mit.background || 'fff'; // background color
ask_mit.hover = ask_mit.hover || '222'; // hover color
ask_mit.style = ask_mit.style || 'border:none;margin:0;padding:0;display:block;'; // inline style for the iframe
ask_mit.width = ask_mit.width || '100%'; // width
ask_mit.height = ask_mit.height || 300; // height
ask_mit.tag = ask_mit.tag || ''; // filter by: biology, energy, environment, communications, computation, materials, design, transportation, or manufacturing
ask_mit.pause = ask_mit.pause || false; // pause after X questions
ask_mit.gtracking = ask_mit.gtracking || false; // Google Ad Tracking
// and write the embed
document.write('<iframe src="http://engineering.mit.edu/ask/ask_embed.php?background='+ask_mit.background+'&height='+ask_mit.height+'&hover='+ask_mit.hover+'&tag='+ask_mit.tag+'&pause='+ask_mit.pause+'&gtracking='+ask_mit.gtracking+'" style="'+ask_mit.style+'" width="'+ask_mit.width+'" height="'+ask_mit.height+';overflow:hidden;"></iframe>');