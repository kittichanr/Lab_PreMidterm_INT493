

function getUrl(){
	return 'http://web.sit.kmutt.ac.th/sanit/int493/'
}

function getImageUrl(){
	return getUrl( ) + 'products/images/'
}

function fetchProducts(){
	return fetch(getUrl( )+ 'products.php')
    .then((response) => response.json())
    .then((responseJson) => {
      
      return responseJson.products;
    })
    .catch((error) => {
      console.error(error);
    });

  }

export default { getUrl: getUrl, getImageUrl: getImageUrl, fetchProducts: fetchProducts } ;