using System;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Extensions;

namespace API.Controllers
{
    public class DebugController : BaseApiController
    {
        private readonly AppVersionInfo _appInfo;
        public DebugController(AppVersionInfo appInfo)
        {
            _appInfo = appInfo;
        }

        [HttpGet("app-info")]
        public ActionResult GetAppInfo()
        {
            return Ok(_appInfo.BuildId);
        }

        [HttpGet("not-found")]
        public ActionResult GetNotFound()
        {
            return NotFound();
        }

        [HttpGet("bad-request")]
        public ActionResult GetBadRequest()
        {
            return BadRequest("This is a bad request");
        }

        [HttpGet("server-error")]
        public ActionResult GetServerError()
        {
            throw new Exception("This is a server error");
        }

        [HttpGet("unauthorised")]
        public ActionResult GetUnauthorised()
        {
            return Unauthorized();
        }
    }
}