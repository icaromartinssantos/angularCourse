using ApontamentoInfrastructure;
using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace ApontamentoRepository
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity>
        where TEntity : class
    {
        internal MyDbContext _dbContext;
        public GenericRepository(MyDbContext dbContext)
        {
            _dbContext = dbContext; 
        }

        public bool Create(TEntity entity)
        {
            _dbContext.Add(entity);

            return Save();

        }

        public int Delete(TEntity id)
        {
            var entity = _dbContext.Find<TEntity>(id);

            var ok = _dbContext.Remove(entity);
            Save();
            return ok.Collections.Count();
        }

        public IQueryable<TEntity> GetAll()
        {
            IQueryable<TEntity> query = _dbContext.Query<TEntity>();

            return query;
        }

        

        public TEntity GetById(TEntity id)
        {
            var entity = _dbContext.Find<TEntity>(id);


            return entity;
        }

        public int Update(TEntity entity)
        {
            var ok = _dbContext.Update(entity);
            Save();
            return ok.Collections.Count();
        }

        public bool Save()
        {
            var ok = _dbContext.SaveChanges() > 0? true:false;

            return ok;
        }
    }
}
