const express = require( 'express' );

const router = express.Router();

const URL = require('../model/url')

// @ GET /

router.get( '/:code', ( req, res ) => {
    URL.findOne( { urlCode: req.params.code } )
        .then( url => {
            if ( url ) {
            res.redirect(url.longUrl)
            } else {
                res.status( 404 ).json({msg: "Url not found"})
        }
        } )
        .catch( err => {
            console.log( err )
            res.status(500).json({msg: 'Server Error'})
    })
})

module.exports = router