      <a href="/" className="back-button">Back to Dashboard</a>
    </div>
  );
};

// Quiz Route Component
const QuizRoute = () => {
  const { gameMode } = useParams();
  return <QuizGame gameMode={gameMode} />;
};

// Main App Component
function App() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="app-loading">
        <div className="loading-spinner"></div>
        <p>Loading BlockBrain...</p>
      </div>
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={isAuthenticated ? <Dashboard /> : <LandingPage />} 
          />
          <Route 
            path="/quiz/:gameMode" 
            element={
              isAuthenticated ? (
                <QuizRoute />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Main App with Auth Provider
export default function AppWithAuth() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
