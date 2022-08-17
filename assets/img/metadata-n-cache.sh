#! /bin/bash
aws s3 cp --content-type "text/html" --metadata-directive REPLACE s3://live-coredirection-landing-page/partner_with_us s3://live-coredirection-landing-page/partner_with_us
aws s3 cp --content-type "text/html" --metadata-directive REPLACE s3://live-coredirection-landing-page/corporate-wellness s3://live-coredirection-landing-page/corporate-wellness
aws s3 cp --content-type "text/html" --metadata-directive REPLACE s3://live-coredirection-landing-page/events s3://live-coredirection-landing-page/events
aws s3 cp --content-type "text/html" --metadata-directive REPLACE s3://live-coredirection-landing-page/white-label-booking-solution s3://live-coredirection-landing-page/white-label-booking-solution
aws s3 cp --content-type "text/html" --metadata-directive REPLACE s3://live-coredirection-landing-page/partner_with_us_form s3://live-coredirection-landing-page/partner_with_us_form
aws s3 cp --content-type "text/html" --metadata-directive REPLACE s3://live-coredirection-landing-page/white-label-form s3://live-coredirection-landing-page/white-label-form
aws s3 cp --content-type "text/html" --metadata-directive REPLACE s3://live-coredirection-landing-page/corporate_wellness_form s3://live-coredirection-landing-page/corporate_wellness_form
aws s3 cp --content-type "text/html" --metadata-directive REPLACE s3://live-coredirection-landing-page/events_form s3://live-coredirection-landing-page/events_form
aws s3 cp --content-type "text/html" --metadata-directive REPLACE s3://live-coredirection-landing-page/user-guides-home s3://live-coredirection-landing-page/user-guides-home
aws s3 cp --content-type "text/html" --metadata-directive REPLACE s3://live-coredirection-landing-page/activity-partner-guide s3://live-coredirection-landing-page/activity-partner-guide
aws s3 cp --content-type "text/html" --metadata-directive REPLACE s3://live-coredirection-landing-page/corporate-guide s3://live-coredirection-landing-page/corporate-guide
aws s3 cp --content-type "text/html" --metadata-directive REPLACE s3://live-coredirection-landing-page/check-in-guide s3://live-coredirection-landing-page/check-in-guide
aws s3 cp --content-type "text/html" --metadata-directive REPLACE s3://live-coredirection-landing-page/marketplace-guide s3://live-coredirection-landing-page/marketplace-guide
aws s3 cp --content-type "text/html" --metadata-directive REPLACE s3://live-coredirection-landing-page/404 s3://live-coredirection-landing-page/404
aws s3 cp --content-type "text/html" --metadata-directive REPLACE s3://live-coredirection-landing-page/coming-soon s3://live-coredirection-landing-page/coming-soon
aws s3 cp --content-type "text/html" --metadata-directive REPLACE s3://live-coredirection-landing-page/privacy-policy s3://live-coredirection-landing-page/privacy-policy
aws s3 cp --content-type "text/html" --metadata-directive REPLACE s3://live-coredirection-landing-page/terms-of-use s3://live-coredirection-landing-page/terms-of-use
aws s3 cp --content-type "text/html" --metadata-directive REPLACE s3://live-coredirection-landing-page/cookies s3://live-coredirection-landing-page/cookies
aws s3 cp --content-type "text/html" --metadata-directive REPLACE s3://live-coredirection-landing-page/contact-us s3://live-coredirection-landing-page/contact-us 
echo "copy images"
aws s3 sync /var/www/landing-page/assets/ s3://cdn.coredirection.com/landing-page/assets/ --delete --cache-control max-age=2592000
echo "purging cache"
aws cloudfront create-invalidation --distribution-id EYI57GIXTRAO5 --paths '/*'
echo "remove unnecessary files"
aws s3 rm s3://live-coredirection-landing-page/metadata-n-cache.sh
aws s3 rm s3://live-coredirection-landing-page/appspec.yml
