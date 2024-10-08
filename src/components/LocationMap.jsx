const LocationMap = () => {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.871670349836!2d-83.64462712569028!3d9.944633973986468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0d39b08c22dbb%3A0x3156ce7004c10622!2sVivero%20La%20Orqu%C3%ADdea!5e0!3m2!1ses!2scr!4v1728413429940!5m2!1ses!2scr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default LocationMap;