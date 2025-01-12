export function Statistics() {
    const statisticsCards = [];

    return (
        <div title="Статистика" class="stats" id="stats">
            <h2>Статистика</h2>
            <p class="stats-section-description">За всё время существования проекта игроки:</p>
            <div class="stats-details">
                {statisticsCards}        
            </div>         
        </div>
    );
}