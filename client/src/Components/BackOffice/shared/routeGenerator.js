module.exports = {

    getURI(uriSegment = "") {
        return "http://localhost:5000/api/" + uriSegment;
    }

}