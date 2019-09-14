using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using VideosAPI.Services;

namespace VideosAPI
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            var connectionString = "Server=localhost,1433;Database=VideosDB;User Id=sa;Password=Passw0rd!";

            services.AddDbContext<VideosDbContext>(o => o.UseSqlServer(connectionString));

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app,
               IHostingEnvironment env,
               VideosDbContext db)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                var options = new WebpackDevMiddlewareOptions()
                {
                    HotModuleReplacement = true
                };

                app.UseWebpackDevMiddleware(options);
            }

            app.UseStaticFiles();

            db.CreateSeedData();

            app.UseMvcWithDefaultRoute();
        }
    }
}
