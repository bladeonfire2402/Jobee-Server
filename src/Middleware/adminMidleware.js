class AdminMiddleware {
   isAdmin(req, res, next) {
    //if (req.user && req.user.role === 'admin') {
      //return next();
    //}
    //return res.status(403).json({ message: 'Access denied' });
    next();
  }
}

export default new AdminMiddleware;