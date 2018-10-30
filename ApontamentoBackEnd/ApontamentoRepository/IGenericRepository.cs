using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApontamentoRepository
{
    public interface IGenericRepository<TEntity>
        where TEntity : class
    {
        IQueryable<TEntity> GetAll();

        TEntity GetById(TEntity id);

        bool Create(TEntity entity);

        int Update(TEntity entity);

        int Delete(TEntity id);
    }
}
