const express = require( 'express' );

const router = express.Router();

const validUrl = require( 'valid-url' );

const shortId = require( 'shortid' )

const config = require('config')

const URL = require( '../model/url' )

// @route POST /api/url/shorten

router.post( '/shorten', ( req, res ) => {
    const { longUrl } = req.body;
    const baseUrl = config.get( 'baseUrl' );

    if ( !validUrl.isUri( baseUrl ) ) {
        res.status(401).json({msg: "Invalid Base Url"})
    }

    const urlCode = shortId.generate();

    if ( validUrl.isUri( longUrl ) ) {
        URL.findOne( { longUrl } )
            .then( url => {
                if ( url ) {
                    // console.log(url)
                    
                } else {
                    const shortUrl = `${ baseUrl }/${ urlCode }`
                   
                   url = new URL( {
                        longUrl,
                        shortUrl,
                        urlCode,
                        date: new Date()
                    } );
                    url.save()
                        .then( url => res.json(url) )
                    .catch(err=> console.log(err))
                    

                }
            } )
            .catch( err => {
                console.log( err )
                res.status(500).json({msg: 'Server Error'})
        } )
    } else {
        res.status(401).json({msg: 'Invalid Short Url'})
    }
})

module.exports = router