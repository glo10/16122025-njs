export function checkId(req, res, next) {
    if(/\d+/.test(req.params.id)) next()
    else {
        res.status(400)
        res.json({ success: false, message: 'id must be a numeric'})
    }
}