var flower = function(name, type, newPrice, oldPrice, photoAddress) {
    this.name = name;
    this.type = type;
    this.newPrice = newPrice;
    this.oldPrice = oldPrice;
    this.photoAddress = photoAddress;
}

var flowers = [];
flowers.push(new flower("Biel Orchid",          "orchid", "7.99" , "9.99",  "images/orchidea-biel.jpg"       ));
flowers.push(new flower("Blush Orchid",         "orchid", "7.99" , "9.99",  "images/orchidea-blush.jpg"      ));
flowers.push(new flower("Dots Orchid",          "orchid", "9.99" , "12.99", "images/orchidea-dots.jpg"       ));
flowers.push(new flower("Ravello Orchid",       "orchid", "9.99" , "12.99", "images/orchidea-ravello.jpg"    ));
flowers.push(new flower("Spring Orchid",        "orchid", "9.99" , "12.99", "images/orchidea-spring.jpg"     ));
flowers.push(new flower("Sunny Orchid",         "orchid", "9.99" , "12.99", "images/orchidea-sunny.jpg"      ));
flowers.push(new flower("Sunset Orchid",        "orchid", "12.99", "15.99", "images/orchidea-sunset.jpg"     ));
flowers.push(new flower("Trozzy Blue Orchid",   "orchid", "12.99", "15.99", "images/orchidea-trozzy-blue.jpg"));

flowers.push(new flower("Agave Shaka",          "succulent", "12.99", "15.99", "images/agave-shaka-zulu.jpg"));
flowers.push(new flower("Aloe Arborescens",     "succulent", "12.99", "15.99", "images/aloe-arborescens.jpg"));
flowers.push(new flower("Aloe Mitriformis",     "succulent", "12.99", "15.99", "images/aloe-mitriformis.jpg"));
flowers.push(new flower("Aloe Vera",            "succulent", "12.99", "15.99", "images/aloe-vera.jpg"));
flowers.push(new flower("Aloe Zebrina",         "succulent", "12.99", "15.99", "images/aloe-zebrina.jpg"));
flowers.push(new flower("Cereus Spiralis",      "succulent", "12.99", "15.99", "images/cereus-spiralis.jpg"));
flowers.push(new flower("Epiphyllum Angulier",  "succulent", "12.99", "15.99", "images/epiphyllum-angulier.jpg"));
