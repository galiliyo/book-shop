// // $(".rating").starRating();


// $("[data-id=11].rating").starRating({

// });

// // $(" [data-id=11].rating").starRating({
// //     initialRating: 2.5,
// //     readOnly: true,
// // });


// // $(" [data-id=12].rating").starRating({
// //     initialRating: 3,
// //     readOnly: true,
// // });


// // console.log($("[data-id=11]"))


ratings(11, 2, false)

function ratings(id, rating, readOnly) {

    var selector = `data-id=${id}`

    $("[data-id=" + id + "].rating").starRating({
        initialRating: rating,
        readOnly: readOnly,
        totalStars: 5,
        starShape: 'rounded',
        starSize: 20,
        emptyColor: 'lightgray',
        hoverColor: 'salmon',
        activeColor: 'crimson',
        useGradient: false,
    });

}


// $("[data-id=11].rating").starRating({
//     initialRating: 3,
//     readOnly: true,

//     totalStars: 5,
//     starShape: 'rounded',
//     starSize: 20,
//     emptyColor: 'lightgray',
//     hoverColor: 'salmon',
//     activeColor: 'crimson',
//     useGradient: false,
// });