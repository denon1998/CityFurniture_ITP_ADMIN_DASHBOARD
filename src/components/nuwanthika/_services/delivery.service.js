

export class DeliveryService {

    domain = 'http://furniture-store-backend.herokuapp.com';
    endpoint = '/api/deliveries';
 
    getAll(a, s, length, data) {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(this.domain + this.endpoint + "?size=" + s + "&page=" + a, requestOptions)
            .then((response) => {
                length(response.headers.get('X-Total-Count'))
                return response.json()
            })
            .then(result => {
                console.log(result)
                data(result);
            })
            .catch(error => console.log('error', error));
    }

    save(data, success) {
        data._id = null;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify(data);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(this.domain + this.endpoint, requestOptions)
            .then(response => response.text())
            .then(result => success(result))
            .catch(error => console.log('error', error));


    }



    update(data, success) {
        // data._id = null;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify(data);

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(this.domain + this.endpoint, requestOptions)
            .then(response => response.text())
            .then(result => success(result))
            .catch(error => console.log('error', error));


    }


    delete(data, success) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(data);

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(this.domain + this.endpoint, requestOptions)
            .then(response => response.text())
            .then(result => success(result))
            .catch(error => console.log('error', error));
    }



    getByID(id, success) {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(this.domain + this.endpoint + "/getById/" + id, requestOptions)
            .then(response => response.text())
            .then(result => {
                const d = JSON.parse(result);
                success(d)
            })
            .catch(error => console.log('error', error));
    }


    search(query, length, data) {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(this.domain + this.endpoint + "/_search?query=" + query.query + "&size=" + query.size + "&page=" + query.page, requestOptions)
            .then(response => {
                length(response.headers.get('X-Total-Count'))
                return response.json();
            })
            .then(result => {
                console.log(result)
                data(result);
            })
            .catch(error => console.log('error', error));
    }

}