function resetText(ttip)
{
	ttip.innerHTML = 'Copy to clipboard';
}

function stripCodeHtml(html)
{
	html = html.replace(/<br\s*\/?>(?=(<br\s*\/?>))/gi, '\n');
	html = html.replace(/[^\S\r\n]{2,}/g, '');
	html = html.replace(/&nbsp;/gi, ' ');

	const tempDiv = document.createElement('div');
	tempDiv.innerHTML = html;
	tempDiv.querySelectorAll('button').forEach(el => el.remove());

	return tempDiv.textContent;
}

function copyCode(btn)
{
	const tooltip = btn.firstElementChild;
	tooltip.innerHTML = 'Text copied!';
	setTimeout(resetText, 1500, tooltip);

	const code = stripCodeHtml(btn.parentElement.innerHTML);

	navigator.clipboard.writeText(code.trim());
}
