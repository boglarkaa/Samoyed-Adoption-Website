document.write("<div class='row row-cols-1 row-cols-md-3 g-4' id='services'>");

for (let service of services) {
	document.write("<div class='col'>");
	document.write("<div class='card h-100'>");
	document.write("<div class='card-body row'>");
	document.write("<h5 class='card-title'>" + service.package.title + "</h5>");
	document.write("<div class='card-text col-8'>");
	document.write("<ul class='list-group list-group-flush'>");
	for (s of service.package.service) {
		document.write("<li class='list-group-item'>" + s + "</li>");
	}
	document.write("</ul>");
	document.write("</div>");
	document.write("<div class='col-4'>");
	document.write("<ul class='list-group list-group-flush'>");
	for (p of service.package.prices) {
		document.write("<li class='list-group-item'>$" + p + "</li>");
	}
	document.write("</ul>");
	document.write("</div>");
	document.write("</div>");
	document.write("<div class='card-footer text-muted'>");
	document.write("<small class='row'> <div class='col-8'>Total:</div> <div class='col-3'>$" + calculateTotal(service) + "</div></small>");
    document.write("</div>");
    document.write("<button>Adopt now!</button>")
	document.write("</div>");
	document.write("</div>");
}

document.write("</div>");
