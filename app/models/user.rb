class User < ApplicationRecord
    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true

    attr_reader: password
    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)

    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.new(password)
    end

    def is_password?(password)
        BCrypt::Password.create(self.password_digest).is_password?(password)
    end

    def generate_session_token
        SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = generate_session_token
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= generate_session_token
    end
end
