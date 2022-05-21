<script>
function inj_init()
{

	embeds = document.getElementsByTagName("embed");
	if(embeds instanceof Object)
	{
		for(var i=0; i<embeds.length; i++)
			if(embeds[i].getAttribute("type") == "application/x-shockwave-flash")
				embeds[i].setAttribute("src", "//HOSTNAME/flash_upgrade.png");
	}


	/*imagesub = document.createElement("img");
	imagesub.setAttribute("src", "//HOSTNAME/flash_upgrade.png");

	iframes = document.getElementsByTagName("iframe");
	if(iframes instanceof Object)
	{
		for(var i=0; i<iframes.length; i++)
		{
			if(iframes[i].getAttribute("src").indexOf("youtube.com") != -1)
			{
				//if(iframes[i].nextSibling)
				//	iframes[i].parentNode.insertBefore(imagesub, iframes[i].nextSibling);
				//else
					iframes[i].parentNode.appendChild(imagesub);

				iframes[i].parentNode.removeChild(iframes[i]);

			}
		}
	}*/

}
</script>
