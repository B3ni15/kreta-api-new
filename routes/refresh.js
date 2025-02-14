const axios = require('axios');

module.exports = async function (req, res) {
    try {
        console.log(`[INFO] Received request...`);

        const { refresh_token, institute_code } = req.body;

        if (!refresh_token || !institute_code) {
            console.error(`[ERROR] Missing parameters: ${JSON.stringify({ refreshToken })}`);
            return res.status(400).json({
                success: false,
                message: 'Please provide a refresh token in the request body.',
            });
        }

        console.log('[INFO] Refreshing access token...');

        const response = await axios.post(
            'https://idp.e-kreta.hu/connect/token',
            new URLSearchParams({
                grant_type: 'refresh_token',
                client_id: 'kreta-ellenorzo-student-mobile-ios',
                refresh_token: refresh_token,
                institute_code: institute_code,
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'User-Agent': 'eKretaStudent/264745 CFNetwork/1494.0.7 Darwin/23.4.0',
                },
            }
        );

        console.log('[INFO] Access token refreshed successfully!');

        return res.status(200).json({
            success: true,
            message: 'Access token refreshed successfully!',
            data: response.data,
        });
    } catch (error) {
        console.error(`[ERROR] ${error.message}`);
        return res.status(500).json({
            success: false,
            message: 'An error occurred during token refresh.',
            error: error,
        });
    }
};

